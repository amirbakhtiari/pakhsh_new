<!doctype html>
<html lang="{{ config('app.locale') }}" ng-app='PakhshApp' dir='rtl'>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Styles -->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="{{asset('css/materialize.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/loading-bar.min.css')}}" rel="stylesheet" type="text/css">        
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        <ui-view></ui-view>
        <script type="text/javascript" src="{{asset('js/jquery-2.2.3.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/materialize.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/custom.js')}}"></script>        
        <script src="{{asset('js/megamenu.js')}}"></script>

        <script src="{{asset('js/vendor.js')}}"></script>
        <script src="{{asset('js/scripts.js')}}"></script>
        <script src="{{asset('js/loading-bar.min.js')}}"></script>
    </body>
</html>
