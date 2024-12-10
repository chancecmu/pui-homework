class Slideshow {
    constructor({ sliderId, leftButtonId, rightButtonId, totalSlides, actions, restartButtonId = null, textHolderId = null, startIndex = 0, categoryButtonSelector = null }) {
        this.slider = document.getElementById(sliderId);
        this.leftButton = document.getElementById(leftButtonId);
        this.rightButton = document.getElementById(rightButtonId);
        this.totalSlides = totalSlides;
        this.actions = actions;
        this.index = startIndex;
        this.position = 0;
        this.textHolder = textHolderId ? document.getElementById(textHolderId) : null;
        this.restartButton = restartButtonId ? document.getElementById(restartButtonId) : null;
        this.categoryButtonSelector = categoryButtonSelector;
        this.currentShowClasses = new Set();
        this.previousShowStates = [];

        this.init();
    }

    init() {
        this.applyActions(this.index);
        this.setupEventListeners();
        this.setupExternalButtons();
    }

    setupEventListeners() {
        if (this.leftButton) {
            this.leftButton.addEventListener('click', () => this.prevSlide());
        }

        if (this.rightButton) {
            this.rightButton.addEventListener('click', () => this.nextSlide());
        }

        if (this.restartButton) {
            this.restartButton.addEventListener('click', () => this.restartSlideshow());
        }

        this.setupIndexButtonListeners();
        this.setupCategoryButtonListeners();
    }

    setupIndexButtonListeners() {
        const cabinetBtns = this.slider.querySelectorAll('.cabinet button');
        cabinetBtns.forEach(button => {
            button.addEventListener('click', () => this.goToIndex(parseInt(button.getAttribute('data-index'))));
        });
    }

    setupCategoryButtonListeners() {
        const buttons = document.querySelectorAll('.item, .cabinet button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
        });
    }

    setupExternalButtons() {
        if (this.categoryButtonSelector) {
            const categoryButtons = document.querySelectorAll(this.categoryButtonSelector);
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const index = parseInt(button.getAttribute('data-slide-index'));
                    this.goToIndex(index);
                });
            });
        }
    }

    updateCategoryButtons() {
        const numCategories = 4;
        const slidesPerCategory = Math.ceil(this.actions.length / numCategories);
        const currentCategory = Math.floor(this.index / slidesPerCategory);

        if (this.categoryButtonSelector) {
            const categoryButtons = document.querySelectorAll(this.categoryButtonSelector);
            categoryButtons.forEach(button => {
                const buttonIndex = parseInt(button.getAttribute('data-slide-index'));
                const isSelected = Math.floor(buttonIndex / slidesPerCategory) === currentCategory;
                button.classList.toggle('selected', isSelected);
            });
        }
    }

    goToIndex(index) {
        if (index >= 0 && index < this.actions.length) {
            this.updateShowClasses(index);
            this.index = index;
            this.position = this.actions[index].transform !== undefined ? this.actions[index].transform : this.position;
            this.applyActions(index);
            this.updateCategoryButtons();
        }
    }

    nextSlide() {
        if (this.index < this.actions.length - 1) {
            const newIndex = this.index + 1;
            this.updateShowClasses(newIndex);
            this.applyActions(newIndex);
            this.updateCategoryButtons();
            this.position = this.actions[newIndex].transform !== undefined
                ? this.actions[newIndex].transform
                : this.position;
        }
    }

    prevSlide() {
        if (this.index > 0) {
            const newIndex = this.index - 1;
            this.updateShowClasses(newIndex);
            this.applyActions(newIndex);
            this.updateCategoryButtons();
            this.position = this.actions[newIndex].transform !== undefined
                ? this.actions[newIndex].transform
                : this.position;
        }
    }

    updateShowClasses(index) {
        const isForward = index > this.index;

        if (isForward) {
            const currentActions = this.actions[index];
            if (currentActions.showDivs) {
                currentActions.showDivs.forEach(className => {
                    const div = this.slider.querySelector(`.${className}`);
                    if (div) {
                        div.classList.add('show');
                        this.currentShowClasses.add(className);
                    }
                });
            }
        } else {
            const previousActions = this.actions[this.index];
            if (previousActions.showDivs) {
                previousActions.showDivs.forEach(className => {
                    const div = this.slider.querySelector(`.${className}`);
                    if (div) {
                        div.classList.remove('show');
                        this.currentShowClasses.delete(className);
                    }
                });
            }
        }
        this.index = index;
    }

    applyActions(index) {
        const actions = this.actions[index];
        if (!actions) return;

        this.updateBackgrounds(actions.updateBackgrounds);
        this.updateText(actions.updateText);
        this.applyTransform(actions.transform);
        this.updateButtonOpacity();
    }

    updateBackgrounds(backgrounds) {
        if (!backgrounds) return;
        backgrounds.forEach(bg => {
            const element = this.slider.querySelector(`.${bg.className}`);
            if (element) element.style.backgroundImage = `url(${bg.image})`;
        });
    }

    updateText(text) {
        if (!text || !this.textHolder) return;
        const h5Element = this.textHolder.querySelector('h5');
        if (h5Element) h5Element.innerHTML = text;

        const dynamicRestartButton = document.getElementById('restart');
        if (dynamicRestartButton) {
            dynamicRestartButton.addEventListener('click', () => this.restartSlideshow());
        }
    }

    applyTransform(transform) {
        const transformPercentage = 100 / this.totalSlides;
        const translateValue = (transform !== undefined ? transform : this.position) * -transformPercentage;
        this.slider.style.transform = `translateX(${translateValue}%)`;
    }

    updateButtonOpacity() {
        if (this.leftButton) {
            this.leftButton.classList.toggle('faded', this.index === 0);
        }

        if (this.rightButton) {
            this.rightButton.classList.toggle('faded', this.index === this.actions.length - 1);
        }
    }

    restartSlideshow() {
        this.index = 0;
        this.position = 0;
        this.currentShowClasses.clear();
        this.previousShowStates = [];
        this.clearAllShowClasses();
        this.applyActions(this.index);
        this.updateCategoryButtons();
    }

    clearAllShowClasses() {
        const allShowElements = this.slider.querySelectorAll('.show');
        allShowElements.forEach(element => {
            element.classList.remove('show');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tour = [
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-1.webp' }],
            updateText: 'Every item you see can do something magical.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-2.webp' }],
            updateText: 'This one holds a photo.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-3.webp' }],
            updateText: 'And this one — your voice.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-4.webp' }],
            updateText: 'Here\'s a link!<br><br> Anyway, you get the idea.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-5.webp' }],
            updateText: 'Now what\'s this?<br><br> It\'s the only item you go through. Let\'s go!',
            transform: 0,
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-5.webp' }, { className: 'b', image: 'Im/shelf/b-1.webp' }],
            updateText: 'This is a room! <br><br> Each one has a heading and one row less than before.',
            showDivs: ['b'],
            transform: 1,
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-6.webp' }, { className: 'b', image: 'Im/shelf/b-2.webp' }],
            updateText: 'They also get their own icon, which appear on each room item.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-5.webp' }, { className: 'b', image: 'Im/shelf/b-3.webp' }],
            updateText: 'Keep as many rooms as you like, using them to expand and explore your Shelf.',
        },
        {
            updateBackgrounds: [{ className: 'a', image: 'Im/shelf/a-5.webp' }, { className: 'b', image: 'Im/shelf/b-1.webp' }],
            updateText: 'Let’s go into another one, the one with a paper plane.',
            transform: 1,
        },
        {
            updateBackgrounds: [{ className: 'b', image: 'Im/shelf/b-4.webp' }, { className: 'c', image: 'Im/shelf/c-1.webp' }],
            updateText: 'This room is nested right inside the previous one, with headings relating subtopics. <br><br> Let\'s see what\'s inside the room with a heart. ',
            showDivs: ['c'],
            transform: 2,
        },
        {
            updateBackgrounds: [{ className: 'c', image: 'Im/shelf/c-2.webp' }],
            updateText: 'Here\'s our last room. Once you\'re down to one row, no other rooms can be added. <br><br>That’s all for now!<br><button id="restart"><img src="Im/shelf/restart-dark.svg"/>Restart</button>',
            showDivs: ['d'],
            transform: 3,
        },
    ];

    const artifacts = [
        { transform: 0 },
        { transform: 1 },
        { transform: 2 },
        { transform: 3 },
        { transform: 4 },
        { transform: 5 },
        { transform: 6 },
        { transform: 7 },
        { transform: 8 },
        { transform: 9 },
        { transform: 10 },
        { transform: 11 },
    ]

    const cabinet = [
        {
            updateBackgrounds: [{ className: 'cab', image: 'Im/shelf/cab-1.webp' }],
            updateText: 'With its rounded corners, and simple handles, cabinet sits at the bottom of every room.</span>',
        },
        {
            updateBackgrounds: [{ className: 'cab', image: 'Im/shelf/cab-2.webp' }],
            updateText: 'Add links, your voice, notes, and more through Cabinet. Works as fast as you think.',
        },
        {
            updateBackgrounds: [{ className: 'cab', image: 'Im/shelf/cab-3.webp' }],
            updateText: 'Choose a base and any accent color that comes to mind and let them color your space.',
        },
        {
            updateBackgrounds: [{ className: 'cab', image: 'Im/shelf/cab-4.webp' }],
            updateText: 'Drag anything into the cabinet to archive. And tap to add it back into your collection.',
        },
    ]

    const time = [
        { transform: 0 },
        { transform: 1 },
        { transform: 2 },
        { transform: 3 },
        { transform: 4 }
    ]

    new Slideshow({
        sliderId: 'tour',
        leftButtonId: 'slideL',
        rightButtonId: 'slideR',
        totalSlides: 4,
        actions: tour,
        restartButtonId: 'restart',
        textHolderId: 'textHolder'
    });

    new Slideshow({
        sliderId: 'artifacts',
        leftButtonId: 'slideL-2',
        rightButtonId: 'slideR-2',
        totalSlides: 12,
        actions: artifacts,
        startIndex: 1,
        categoryButtonSelector: '.item'
    });

    new Slideshow({
        sliderId: 'cabinet',
        totalSlides: 1,
        actions: cabinet,
        textHolderId: 'textHolder-2'
    });

    new Slideshow({
        sliderId: 'time',
        leftButtonId: 'slideL-4',
        rightButtonId: 'slideR-4',
        totalSlides: 5,
        actions: time,
        startIndex: 1
    });
});

// Slider JS Library Implementation

window.onload = function () {
    const baseHueElement = document.querySelector('.base-hue');
    const baseSaturationElement = document.querySelector('.base-saturation');
    const accentHueElement = document.querySelector('.accent-hue');
    const accentSaturationElement = document.querySelector('.accent-saturation');

    // Base Hue Slider
    noUiSlider.create(document.getElementById('base-hue-slider'), {
        start: 211, // Initial hue value
        range: {
            min: 0,
            max: 360,
        },
        step: 1,
        tooltips: false,
        connect: true,
    }).on('update', (values) => {
        const hue = Math.round(values[0]);
        baseHueElement.style.fill = `hsl(${hue}, 38%, 47%)`;
    });

    // Base Saturation Slider
    noUiSlider.create(document.getElementById('base-saturation-slider'), {
        start: 27, // Initial saturation value
        range: {
            min: 0,
            max: 64,
        },
        step: 1,
        tooltips: false,
        connect: true,
    }).on('update', (values) => {
        const saturation = Math.round(values[0]);
        baseSaturationElement.style.fill = `hsl(122, ${saturation}%, 47%)`;
    });

    // Accent Hue Slider
    noUiSlider.create(document.getElementById('accent-hue-slider'), {
        start: 216, // Initial hue value
        range: {
            min: 0,
            max: 360,
        },
        step: 1,
        tooltips: false,
        connect: true,
    }).on('update', (values) => {
        const hue = Math.round(values[0]);
        accentHueElement.style.fill = `hsl(${hue}, 22%, 47%)`;
    });

    // Accent Saturation Slider
    noUiSlider.create(document.getElementById('accent-saturation-slider'), {
        start: 22, // Initial saturation value
        range: {
            min: 0,
            max: 48,
        },
        step: 1,
        tooltips: false,
        connect: true,
    }).on('update', (values) => {
        const saturation = Math.round(values[0]);
        accentSaturationElement.style.fill = `hsl(122, ${saturation}%, 47%)`;
    });
};









