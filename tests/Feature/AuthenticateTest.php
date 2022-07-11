<?php

namespace Tests\Feature;

use Tests\TestCase;

class AuthenticateTest extends TestCase
{

    /** @test */

    public function a_user_can_login_and_has_token()
    {
        $body = [
            "email" => "vothanhloc20@gmail.com",
            "password" => "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
        ];

        $this->json('POST', 'api/auth/login', $body, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure(['data' => ['token']]);
    }

    /** @test */

    public function a_user_login_with_wrong_password()
    {
        $body = [
            "email" => "vothanhloc20@gmail.com",
            "password" => "12345678"
        ];

        $this->json('POST', 'api/auth/login', $body, ['Accept' => 'application/json'])
            ->assertStatus(401)
            ->assertJsonStructure(['message']);
    }

    /** @test */

    public function a_user_login_with_wrong_email()
    {
        $body = [
            "email" => "vothanhloc20+1@gmail.com",
            "password" => "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
        ];

        $this->json('POST', 'api/auth/login', $body, ['Accept' => 'application/json'])
            ->assertStatus(404)
            ->assertJsonStructure(['message']);
    }

    /** @test */

    public function a_user_login_with_validate()
    {
        $body = [
            "email" => "",
            "password" => ""
        ];

        $this->json('POST', 'api/auth/login', $body, ['Accept' => 'application/json'])
            ->assertStatus(422)
            ->assertJsonStructure(['error' => ['email', 'password']]);
    }

    /** @test */

    public function a_new_user_register()
    {
        $body = [
            'first_name' => 'Vo',
            'last_name' => 'Thanh Loc',
            'email' => 'vothanhloc20+200@gmail.com',
            'password' => '123456789',
            'password_confirmation' => '123456789',
        ];

        $this->json('POST', 'api/auth/register', $body, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson(['message' => "Register Successfully"]);
    }
}
