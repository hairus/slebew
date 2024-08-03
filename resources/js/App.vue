<!-- @format -->

<template>
	<router-view />
</template>

<script>
	import figlet from 'figlet';
	import standard from 'figlet/importable-fonts/Standard.js';

	figlet.parseFont('Standard', standard);

	figlet.text(
		'x1901 - hayo mau ngapain ??',
		{
			font: 'Standard',
		},
		function (err, data) {
			console.log(data);
		}
	);
</script>
