
import Vue from 'vue'

export default class AccountError  extends Error {
	constructor(message) {
		super(message);
	}
}