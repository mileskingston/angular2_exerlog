export class Item {
	constructor (
		public id: number,
		public title: string,
		public updated: any,
		public editing: boolean,
		public amount: number
	) {}
}