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

const NOISE_IMG = 'https://deokgoo.github.io/old_video_effect/img/noise.jpg';
const SPACE_SIZE = 5;

class OldVideoEffect implements EffectControl {
	private _target: HTMLDivElement;
	private _noise: HTMLDivElement;
	private _imgLWrapper: HTMLDivElement;
	private _imgRWrapper: HTMLDivElement;
	private _imgL: HTMLImageElement;
	private _imgR: HTMLImageElement;
	private _size: ImgSize;

	private constructor(target: HTMLImageElement, imgUrl: string, size?: ImgSize) {
		this._target = target;
		if(size) this._size = size;
		this.reSize();
		this.createNoise();
		this.defineImage(imgUrl);
		this.filter('black');
		this.render();
		this.animationRun();
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
		noise.style.zIndex = '10';
		noise.style.opacity = '0.3';
		this._noise = noise;
	}

	reSize() {
		this._target.style.position = 'relative';
		this._target.style.width = `${this._size.width}px`;
		this._target.style.height = `${this._size.height}px`;
		this._target.style.overflow = 'hidden';
	};
	animationRun() {
		setInterval(() => {
			this._imgLWrapper.classList.toggle('use-moveAnimation');
			this._imgRWrapper.classList.toggle('use-moveAnimation');
			if(this._imgRWrapper.classList.contains('use-moveAnimation')) {
				this._imgRWrapper.style.zIndex = '1';
				this._imgLWrapper.style.zIndex = '0';
			} else {
				this._imgRWrapper.style.zIndex = '0';
				this._imgLWrapper.style.zIndex = '1';
			}
		}, 6000);



	}
	animationStop: () => void;

	defineImage(imgUrl: string) {
		this._imgL = document.createElement('img');
		this._imgL.src = imgUrl;
		this._imgL.style.width = `calc(${this._size.width}px)`;
		this._imgL.style.height = `calc(${this._size.height}px)`;

		this._imgR = document.createElement('img');
		this._imgR.src = imgUrl;
		this._imgR.style.width = `calc(${this._size.width}px+${SPACE_SIZE}px)`;
		this._imgR.style.height = `calc(${this._size.height}px)`;

		this._imgLWrapper = document.createElement('div');
		this._imgLWrapper.classList.add('wrapper-left');
		this._imgRWrapper = document.createElement('div');
		this._imgRWrapper.classList.add('wrapper-right');

		this._imgLWrapper.style.overflow = 'hidden';
		this._imgLWrapper.style.width = `calc(${this._size.width}px+${SPACE_SIZE}px)`;
		this._imgLWrapper.style.paddingLeft = `${SPACE_SIZE}px`;
		this._imgLWrapper.style.height = `${this._size.height}px`;
		this._imgLWrapper.style.position = 'absolute';

		this._imgRWrapper.style.overflow = 'hidden';
		this._imgRWrapper.style.width = `${this._size.width}px`;
		this._imgRWrapper.style.position = 'absolute';
		this._imgRWrapper.classList.add('use-moveAnimation');

	}

	render() {
		this._target.append(this._noise);
		this._imgLWrapper.appendChild(this._imgL);
		this._imgRWrapper.appendChild(this._imgR);
		this._target.append(this._imgLWrapper);
		this._target.append(this._imgRWrapper);
	}

	filter(kind: Filter) {
		switch(kind) {
			case 'black': {
				this._imgL.style.filter = `grayscale(100%)`;
				this._imgR.style.filter = `grayscale(100%)`;
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
