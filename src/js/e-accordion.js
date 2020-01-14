import { addEventListener} from './utils';

/**
 * Обработчик клика на раскрывающийся элемент.
 */
addEventListener('.e-accordion__short', (event, node) => {
	const accordion = node.parentNode;

	const accordionMore = accordion.querySelector('.e-accordion__more');

	if (accordionMore) {
		accordionMore.classList
			.toggle('e-accordion__more_visible');
	}
});
