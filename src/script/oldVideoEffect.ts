type Filter = 'black' | 'white';
type ImgSize = {
	width: number,
	height: number
}

interface EffectControl {
	filter: (kind: Filter) => void;
	reSize: (size: ImgSize) => void;
	animationRun: () => void;
	animationStop: () => void;
}
class OldVideoEffect implements EffectControl {
	private _img: HTMLDivElement;
	private _size: ImgSize;

	private constructor(el: HTMLImageElement, size: ImgSize) {
		this._img = el;
		this._size = size;
		this.filter('black');
	}

	static createImg(el: HTMLImageElement, size: ImgSize) {
		const oldVideoEffect = new OldVideoEffect(el, size);
		return oldVideoEffect;
	}

	reSize: (size: ImgSize) => void;
	animationRun: () => void;
	animationStop: () => void;



	filter(kind: Filter) {
		switch(kind) {
			case 'black': {
				this._img.setAttribute('style', 'filter: grayscale(100%);');
				break;
			}
			case 'white': {
				break;
			}
			default: {

			}
		}
	}
}

export default OldVideoEffect;
