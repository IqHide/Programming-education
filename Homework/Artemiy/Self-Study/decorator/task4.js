//GPT сказал, что мой код упрощенный и не позволяет сохранять контекст, игнорируемых запросов. Я их просто пропускаю, а не сохраняю

function throttle(f, ms) {
	let timeout;
	return function () {
		if (!timeout) {
			timeout = setTimeout(() => {
				f.apply(this, arguments);
				timeout = null;
			}, ms);
		}
	};
}

//Попробую реализовать сохранение контекста последнего вызова
function throttleUp(f, ms) {
	let isThrottle = false;
	let actualArgs, actualThis;

	function wrap() {
		if (isThrottle) {
			actualArgs = arguments;
			actualThis = this;
			return;
		}
		func.apply(this, arguments);
		isThrottle = true;
		setTimeout(() => {
			isThrottle = false;
			if (actualArgs) {
				wrap.apply(actualThis, actualArgs);
				actualArgs = actualThis = null;
			}
		}, ms);
	}
	return wrap;
}
