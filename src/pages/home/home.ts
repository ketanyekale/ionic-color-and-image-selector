import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	colors: Array<string> = ['#d435a2', '#a834bf', '#6011cf', '#0d0e81', '#0237f1', '#0d8bcd', '#16aca4', '#3c887e', '#157145', '#57a773', '#88aa3d', '#b7990d', '#fcbf55', '#ff8668', '#ff5c6a', '#c2454c', '#c2183f', '#d8226b', '#8f2d56', '#482971', '#000000', '#561f37', '#433835', '#797979', '#819595'];
	color: string = '#d435a2';
	images: Array<string> = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
	image: string = 'img1';
	constructor(public navCtrl: NavController) {

	}

	prepareColorSelector() {
		setTimeout(() => {
			let buttonElements = document.querySelectorAll('div.alert-radio-group button');
			if (!buttonElements.length) {
				this.prepareColorSelector();
			} else {
				for (let index = 0; index < buttonElements.length; index++) {
					let buttonElement = buttonElements[index];
					let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
					let color = optionLabelElement.innerHTML.trim();

					if (this.isHexColor(color)) {
						buttonElement.classList.add('colorselect', 'color_' + color.slice(1, 7));
						if (color == this.color) {
							buttonElement.classList.add('colorselected');
						}
					}
				}
			}
		}, 100);
	}

	isHexColor(color) {
		let hexColorRegEx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
		return hexColorRegEx.test(color);
	}

	selectColor(color) {
		let buttonElements = document.querySelectorAll('div.alert-radio-group button.colorselect');
		for (let index = 0; index < buttonElements.length; index++) {
			let buttonElement = buttonElements[index];
			buttonElement.classList.remove('colorselected');
			if (buttonElement.classList.contains('color_' + color.slice(1, 7))) {
				buttonElement.classList.add('colorselected');
			}
		}
	}

	setColor(color) {
		console.log('Selected Color is', color);

	}

	prepareImageSelector() {
		setTimeout(() => {
			let buttonElements = document.querySelectorAll('div.alert-radio-group button');
			if (!buttonElements.length) {
				this.prepareImageSelector();
			} else {
				for (let index = 0; index < buttonElements.length; index++) {
					let buttonElement = buttonElements[index];
					let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
					let image = optionLabelElement.innerHTML.trim();
					buttonElement.classList.add('imageselect', 'image_' + image);
					if (image == this.image) {
						buttonElement.classList.add('imageselected');
					}
				}
			}
		}, 100);
	}

	selectImage(image) {
		let buttonElements = document.querySelectorAll('div.alert-radio-group button.imageselect');
		for (let index = 0; index < buttonElements.length; index++) {
			let buttonElement = buttonElements[index];
			buttonElement.classList.remove('imageselected');
			if (buttonElement.classList.contains('image_' + image)) {
				buttonElement.classList.add('imageselected');
			}
		}
	}

	setImage(image) {
		console.log('Selected image is', image);

	}
}
