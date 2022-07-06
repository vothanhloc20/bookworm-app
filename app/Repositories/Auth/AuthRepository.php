<?php

namespace App\Repositories\Auth;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Traits\ApiResponse;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthRepository implements AuthInterface
{
    use ApiResponse;

    private $query;

    public function __construct()
    {
        $this->query = User::query();
    }

    public function register(RegisterRequest $request)
    {
        $body = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];

        $newUser = User::create($body);

        return $this->apiResponse($newUser, 'success', 'Register Successfully');
    }

    public function login(LoginRequest $request)
    {
        $user = User::query()->where('email', $request->email)->first();

        if (!$user) {
            return $this->apiResponse(null, 'error', 'User not found', 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return $this->apiResponse(null, 'error', 'Password is incorrect', 401);
        }

        $token = $user->createToken("bookworm token")->plainTextToken;;

        $data = [
            'user' => $user,
            'token' => $token,
        ];

        return $this->apiResponse($data, 'success', 'Login Successfully');
    }
}
