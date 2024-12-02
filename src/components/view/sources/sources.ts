import { ISource } from '../../../types/interfaces';
import './sources.css';

class Sources {
	draw(data: ISource[]) {
		const fragment = document.createDocumentFragment();
		const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

		if (!sourceItemTemp) {
			console.error('Template element #sourceItemTemp not found');
			return;
		}

		data.forEach((item) => {
			const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

			const itemName = sourceClone.querySelector('.source__item-name');
			const itemElement = sourceClone.querySelector('.source__item');

			if (itemName) {
				itemName.textContent = item.name;
			}

			if (itemElement) {
				if (item.id !== null) {
					itemElement.setAttribute('data-source-id', item.id);
				} else {
					console.warn('Item ID is null, skipping data-source-id attribute');
				}
			}

			fragment.append(sourceClone);
		});

		const sourcesContainer = document.querySelector('.sources');
		if (sourcesContainer) {
			sourcesContainer.append(fragment);
		} else {
			console.error('Container .sources not found');
		}
	}
}

export default Sources;