Vue.component('cart-object', {
	props: ['object'],
	template: '<li>{{ object.name }} ({{ object.id }})</li>'
});

var app = new Vue({
	el: '#app',
	data: {
		message: "Hello World!",
		date_loaded: 'You loaded this page on ' + new Date().toLocaleString(),
		seen: false,
		children: [
			{name: 'Sarah Connor', age: 19},
			{name: 'Marie', age: 4},
			{name: 'The younger, the better', age: 2}
		],
		preference: 'Les milfs > 35',
		cart: [
			{id: 19, name: 'Sarah Connor'},
			{id: 63, name: 'La mère de Dan'}
		]
	},
	methods: {
		reversePreference: function() {
			this.preference = this.preference.split('').reverse().join('');
		}
	},
	beforeCreate: function() {
		console.log('Please wait, the app is launching');
	},
	created: function () {
		console.log(this.date_loaded);
	},
	beforeMount: function () {
		console.log('We\'re currently searching your DOM element');
	},
	mounted: function() {
		console.log('Your component is now attached to the DOM');
	},
	beforeUpdate: function () {
		console.log('You\'ll suffer an update');
	},
	updated: function () {
		console.log('Changes are now applied');
	},
	beforeDestroy: function() {
		console.log('You have a few moments left to say goodbye');
	},
	destroyed: function () {
		console.log('Buried');
	}
});
