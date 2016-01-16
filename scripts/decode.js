(function() {
	'use strict';
	var isBase64 = window.encoding === 'base64';
	function setEditorValue(val) {
		var editor = document.getElementById('editor');
		editor.value = val;
	}

	function getEditorValue() {
		var editor = document.getElementById('editor');
		return editor.value || '';
	}

	function decode(data) {
		return isBase64 ? atob(data) : decodeURIComponent(data);
	}

	function encode(data) {
		return isBase64 ? btoa(data) : encodeURIComponent(data);
	}

	// Set default value
	setEditorValue(encode(document.URL));

	var decoder = document.getElementById('btn-decode');
	var encoder = document.getElementById('btn-encode');

	// Add Event Listeners
	decoder.addEventListener('click', function() {
		var url = getEditorValue();
		setEditorValue(decode(url));
	});

	encoder.addEventListener('click', function() {
		var url = getEditorValue();
		setEditorValue(encode(url));
	});
})();