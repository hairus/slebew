<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ url('favicon.ico') }}">
    <title>@yield('title') SMAN 1 KRAKSAAN</title>
    <meta content="Skote is a fully featured premium Vuejs admin dashboard template built on top of awesome Bootstrap 5"
        name="description" />
    <!-- vite css and js  -->
    <link rel="stylesheet" href="{{ Vite::asset('resources/sass/app.scss') }}" id="layout-css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/style.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js"></script>
    <script type="module" src="{{ Vite::asset('resources/js/app.js') }}"></script>

    @yield('css')
</head>

<body data-sidebar="dark" data-layout-mode="light">
    <div id="app">
        @yield('content')
    </div>
    <!-- built files will be auto injected -->
    @stack('scripts')
    @yield('js')

</body>

</html>
