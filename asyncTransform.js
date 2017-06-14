function takeLast(fn) {
	var lastId = 0;

	return (...args) => {
		const currentId = ++lastId;

		return new Promise((resolve, reject) => {
			fn(...args).then(
				result => {
					if (currentId === lastId) {
						resolve(result);
					}
				}, 
				error => {
					if (currentId === lastId) {
						reject(error);
					}
				}
			);
		});
	}
}

function asyncTransform(fn, transform) {
	const tfn = (args, resolve, reject) => fn(...args).then(resolve, reject);
	const transformed = transform(tfn);
	return (...args) => {
		return new Promise((resolve, reject) => {
			transformed(args, resolve, reject);
		});
	};	
}