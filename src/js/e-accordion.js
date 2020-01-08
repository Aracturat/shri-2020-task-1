import { addEventListener} from './utils';

addEventListener('.e-accordion__short', (event, node) => {
	const accordion = node.parentNode;

	const accordionMore = accordion.querySelector('.e-accordion__more');

	if (accordionMore) {
		accordionMore.classList
			.toggle('e-accordion__more_visible');
	}
});
