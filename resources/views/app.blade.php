<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="shortcut icon" href="/images/logo_64_64.png" />
        <link rel="icon" href="/images/logo_64_64.png" type="image/x-icon" />

        <title>Welcome to Book Worm</title>
    </head>
    <body class="antialiased">
        <div id="root"></div>
        <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>
