import { addEventListener } from './utils';

/**
 * Обработчик клика на переключатель темы.
 */
addEventListener('.onoffswitch', (event, node) => {
	node.classList.toggle('onoffswitch_checked');

	const defaultThemeClass = 'theme_color_project-default';
	const inverseThemeClass = 'theme_color_project-inverse';

	const toggleTheme = node => {
		node.classList.toggle(defaultThemeClass);
		node.classList.toggle(inverseThemeClass);
	};

	const selector = `.theme.${defaultThemeClass}, .theme.${inverseThemeClass}`;

	document.querySelectorAll(selector)
		.forEach(toggleTheme);
});
