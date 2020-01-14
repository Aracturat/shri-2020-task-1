/**
 * Добавить eventListener для элементов, которые удовлетворяют селектору.
 * @param selector селектор
 * @param eventListener обработчик события
 */
export function addEventListener(selector, eventListener) {
	document.body.addEventListener('click', function (event) {
		document.querySelectorAll(selector)
			.forEach(node => {
				if (node.contains(event.target)) {
					eventListener(event, node);
				}
			});
	});
}
