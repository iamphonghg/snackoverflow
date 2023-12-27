<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" translate="no">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="current-page-name" content="{{Route::current()->getName()}}">
	<meta name="google" content="notranslate">
	<meta http-equiv="x-ua-compatible" content="IE=edge">
	<title>Snackoverflow</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650;700&amp;display=swap"
		rel="stylesheet">
	<script type="module">
		import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
	</script>
	<script type="module" src="http://localhost:5173/@@vite/client"></script>
</head>

<body>
	<div id="root"></div>
	<script type="module" src="http://localhost:5173/resources/js/index.jsx"></script>
</body>

</html>
