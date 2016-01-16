(function() {
	'use strict';

	function setEditorValue(val) {
		var editor = document.getElementById('editor');
		editor.value = val;
	}

	function getEditorValue() {
		var editor = document.getElementById('editor');
		return editor.value || '';
	}

	function decode(url) {
		return decodeURIComponent(url);
	}

	function encode(url) {
		return encodeURIComponent(url);
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