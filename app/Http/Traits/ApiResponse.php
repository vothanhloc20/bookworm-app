<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    public function apiResponse($data = [], $status = null, $message = null): JsonResponse
    {
        return response()->json([
            'status' => $status,
            'data' => $data,
            'message' => $message,
        ]);
    }
}
