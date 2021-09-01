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

const NOISE_IMG = 'http://localhost:8000/img/noise.jpg';
class OldVideoEffect implements EffectControl {
	private _target: HTMLDivElement;
	private _noise: HTMLDivElement;
	private _img: HTMLImageElement;
	private _size: ImgSize;

	private constructor(target: HTMLImageElement, imgUrl: string, size?: ImgSize) {
		this._target = target;
		if(size) this._size = size;
		this.reSize();
		this.createNoise();
		this.defineImage(imgUrl);
		this.filter('black');
		this.render();
	}

	static createImg({target, size, imgUrl}: {target: HTMLImageElement, imgUrl: string, size?: ImgSize}) {
		const oldVideoEffect = new OldVideoEffect(target, imgUrl, size);
		return oldVideoEffect;
	}

	private createNoise() {
		const noise: HTMLDivElement = document.createElement('div');
		noise.classList.add('noise');
		noise.style.backgroundImage = `url(${NOISE_IMG})`;
		noise.style.width = `calc(${this._size.width}px*2)`;
		noise.style.height = `calc(${this._size.height}px*2)`;
		noise.style.position = 'absolute';
		noise.style.left = `calc(-${this._size.width}px/2)`;
		noise.style.top = `calc(-${this._size.height}px/2)`;
		noise.style.animation = 'noiseAnimation 1s steps(1) infinite';
		this._noise = noise;
	}

	reSize() {
		this._target.style.position = 'relative';
		this._target.style.width = `${this._size.width}px`;
		this._target.style.height = `${this._size.height}px`;
		this._target.style.overflow = 'hidden';
	};
	animationRun: () => void;
	animationStop: () => void;

	defineImage(imgUrl: string) {
		this._img = document.createElement('img');
		this._img.src = imgUrl;
		this._img.style.opacity = `0.1`;
	}

	render() {
		this._target.append(this._noise);
		this._target.append(this._img);
	}

	filter(kind: Filter) {
		switch(kind) {
			case 'black': {
				this._img.setAttribute('style',
				'filter: grayscale(100%); opacity: 0.7; width: 100%; height: 100%;');
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
