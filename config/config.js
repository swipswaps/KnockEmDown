var self
module.exports = exports = self = {};
/* These are relative to the app root */
self.directories = {
	"slides": "./slides",
	"slide_templates": "./slide-templates"
};

self.webserver = {
	"ip": "0.0.0.0",
	"port": process.argv[2] || "8000"
};

self.presentation = {
	"theme": "nodejs",
	"theme_directory": "./themes",
	"transition": "fade",
	"fragment_transition": "fade",
	"control_password": 1234,
	"allow_control_from_slides": true
};