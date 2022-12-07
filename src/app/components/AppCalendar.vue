<template>
  <div class="w-schedule js-tabs js-w-schedule" data-w-schedule-timeline="09:00-18:00">
    <!-- 👇 tabs control (mobile) -->
    <ul class="w-schedule__controls js-tabs__controls" aria-label="Select day">
      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-mon" aria-selected="true">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Mon</div>
          <div class="text-lg font-medium line-height-1">11</div>
        </a>
      </li>

      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-tue">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Tue</div>
          <div class="text-lg font-medium line-height-1">12</div>
        </a>
      </li>

      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-wed">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Wed</div>
          <div class="text-lg font-medium line-height-1">13</div>
        </a>
      </li>

      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-thu">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Thu</div>
          <div class="text-lg font-medium line-height-1">14</div>
        </a>
      </li>

      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-fri">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Fri</div>
          <div class="text-lg font-medium line-height-1">15</div>
        </a>
      </li>

      <li class="w-schedule__control-wrapper">
        <a class="w-schedule__control" href="#w-schedule-sat">
          <div class="text-xs opacity-50% text-uppercase letter-spacing-md margin-bottom-xxs">Sat</div>
          <div class="text-lg font-medium line-height-1">16</div>
        </a>
      </li>
    </ul>

    <!-- 👇 events -->
    <div class="w-schedule__days js-tabs__panels">
      <!-- Monday -->
      <section id="w-schedule-mon" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Monday</div>

        <ul class="w-schedule__events">
          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--1 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="1">
              <time class="text-sm opacity-60% text-xs@md" datetime="09:30PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Abs Circuit</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--2 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="2">
              <time class="text-sm opacity-60% text-xs@md" datetime="11:00PT1H30M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Rowing Workout</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--3 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="3">
              <time class="text-sm opacity-60% text-xs@md" datetime="14:00PT1H15M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Yoga Level 1</div>
            </a>
          </li>
        </ul>
      </section>

      <!-- Tuesday -->
      <section id="w-schedule-tue" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Tuesday</div>

        <ul class="w-schedule__events">
          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--2 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="2">
              <time class="text-sm opacity-60% text-xs@md" datetime="10:00PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Rowing Workout</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--4 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="4">
              <time class="text-sm opacity-60% text-xs@md" datetime="11:30PT1H30M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Restorative Yoga</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--1 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="1">
              <time class="text-sm opacity-60% text-xs@md" datetime="13:30PT1H30M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Abs Circuit</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--3 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="3">
              <time class="text-sm opacity-60% text-xs@md" datetime="15:45PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Yoga Level 1</div>
            </a>
          </li>
        </ul>
      </section>

      <!-- Wednesday -->
      <section id="w-schedule-wed" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Wednesday</div>

        <ul class="w-schedule__events">
          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--4 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="4">
              <time class="text-sm opacity-60% text-xs@md" datetime="09:00PT1H15M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Restorative Yoga</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--3 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="3">
              <time class="text-sm opacity-60% text-xs@md" datetime="10:45PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Yoga Level 1</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--2 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="2">
              <time class="text-sm opacity-60% text-xs@md" datetime="12:00PT1H45M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Rowing Workout</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--3 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="3">
              <time class="text-sm opacity-60% text-xs@md" datetime="13:45PT1H15M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Yoga Level 1</div>
            </a>
          </li>
        </ul>
      </section>

      <!-- Thursday -->
      <section id="w-schedule-thu" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Thursday</div>

        <ul class="w-schedule__events">
          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--1 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="1">
              <time class="text-sm opacity-60% text-xs@md" datetime="09:30PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Abs Circuit</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--4 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="4">
              <time class="text-sm opacity-60% text-xs@md" datetime="12:00PT1H45M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Restorative Yoga</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--1 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="1">
              <time class="text-sm opacity-60% text-xs@md" datetime="15:30PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Abs Circuit</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--2 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="2">
              <time class="text-sm opacity-60% text-xs@md" datetime="17:00PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Rowing Workout</div>
            </a>
          </li>
        </ul>
      </section>

      <!-- Friday -->
      <section id="w-schedule-fri" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Friday</div>

        <ul class="w-schedule__events">
          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--2 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="2">
              <time class="text-sm opacity-60% text-xs@md" datetime="10:00PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Rowing Workout</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--1 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="1">
              <time class="text-sm opacity-60% text-xs@md" datetime="12:30PT1H30M">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Abs Circuit</div>
            </a>
          </li>

          <li class="w-schedule__event-wrapper">
            <a class="w-schedule__event w-schedule__event--3 js-w-schedule__event" href="#0"
              aria-controls="w-schedule-modal-id" data-w-schedule-event="3">
              <time class="text-sm opacity-60% text-xs@md" datetime="15:45PT1H">
                <!-- content created in JS --></time>
              <div class="text-md font-medium text-base@md">Yoga Level 1</div>
            </a>
          </li>
        </ul>
      </section>

      <!-- Saturday -->
      <section id="w-schedule-sat" class="w-schedule__day js-tabs__panel">
        <div class="w-schedule__col-label text-sm">Saturday</div>

        <p class="text-center hide@md">No classes on Saturday 👏</p>
      </section>
    </div>

    <!-- background rows -->
    <div class="w-schedule__grid js-w-schedule__grid" aria-hidden="true">
      <!-- grid created in JS -->
    </div>
  </div>

  <!-- modal window (weekly schedule) -->
  <div id="w-schedule-modal-id"
    class="w-schedule-modal modal modal--animate-fade bg-black bg-opacity-90% js-w-schedule-modal js-modal">
    <div class="w-schedule-modal__content modal__content bg radius-md inner-glow shadow-md opacity-0 flex@md js-w-schedule-modal__content"
      role="alertdialog" aria-label="Event Info">
      <!-- modal content is dynamically loaded -->
      <div class="ske height-25% width-30%@md height-100%@md" aria-hidden="true"></div>

      <div class="padding-md width-70%@md height-100%@md" aria-hidden="true">
        <ul class="grid gap-xs">
          <li class="col-3 padding-bottom-sm"><div class="ske ske--text text-xl"></div></li>
          <li><div class="ske ske--text"></div></li>
          <li><div class="ske ske--text"></div></li>
          <li class="col-6"><div class="ske ske--text"></div></li>
        </ul>
      </div>
      <!-- [end] modal content -->
    </div>
  </div>

  <!-- modal content clone - used for morphing bg -->
  <div class="w-schedule-morph-bg bg radius-md is-hidden js-w-schedule-morph-bg" aria-hidden="true"></div>

  <button class="reset w-schedule-close-btn js-tab-focus js-w-schedule-close-btn">
    <svg class="icon icon--sm" viewBox="0 0 24 24">
      <title>Close modal window</title>
      <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <line x1="3" y1="3" x2="21" y2="21" />
        <line x1="21" y1="3" x2="3" y2="21" />
      </g>
    </svg>
  </button>
  <!-- [end] modal window (weekly schedule) -->
</template>

<script setup>

</script>

<style lang="scss">
// @use '../base' as *;
// @use '_1_tabs.scss' as *;
// @use '_1_modal-window.scss' as *;
// @use '_1_skeleton.scss' as *;

/* -------------------------------- 

File#: _2_weekly-schedule
Title: Weekly Schedule
Descr: A table displaying the events of the week
Usage: codyhouse.co/license

-------------------------------- */

:root {
  --w-schedule-row-height: 50px; // rows visible on bigger screens
  --w-schedule-row-nr: 0; // number of rows - dynamically set in JS

  // modal window
  --w-schedule-modal-anim-duration: 0.3s; // modal animation duration
  --w-schedule-modal-close-btn-size: 48px; // close button size

  // event colors
  @include defineColorHSL(--w-schedule-color-1, 27, 87%, 70%);
  @include defineColorHSL(--w-schedule-color-2, 187, 13%, 28%);
  @include defineColorHSL(--w-schedule-color-3, 304, 100%, 89%);
  @include defineColorHSL(--w-schedule-color-4, 96, 67%, 87%);
}

.w-schedule {
  position: relative;
  z-index: 1;
}

/* #region (Mobile Navigation) */
.w-schedule__controls {
  display: flex;
  align-items: center;
}

.w-schedule__control-wrapper {
  flex-grow: 1;
  flex-basis: 0;

  &:not(:last-child) {
    margin-right: var(--space-xxs); // tabs controls gap
  }
}

.w-schedule__control {
  display: block;
  width: 100%;
  background-color: var(--color-contrast-lower);
  padding: 2vw 0;
  border-radius: var(--radius-md);

  color: inherit;
  text-decoration: none;
  text-align: center;

  transition: .2s;

  &:hover {
    background-color: var(--color-contrast-low);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px alpha(var(--color-primary), 0.2);
  }

  &[aria-selected="true"] {
    background-color: var(--color-contrast-higher);
    color: var(--color-bg);
  }
}
/* #endregion */

/* #region (Events) */
.w-schedule__days {
  position: relative;
  z-index: 2;
}

.w-schedule__day {
  position: relative;
  padding-top: var(--space-md);
}

.w-schedule__col-label {
  display: none; // hide column labels on smaller screens
}

.w-schedule__events {
  position: relative;
}

.w-schedule__event-wrapper:not(:last-child) {
  margin-bottom: var(--space-xs); // events gap
}

.w-schedule__event {
  color: inherit;
  text-decoration: none;

  display: block;
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background-color: var(--w-schedule-color-1);
  border-left-width: 4px;
  border-left-style: solid;
  box-shadow: var(--shadow-sm);

  transition: .3s;

  &:hover {
    box-shadow: var(--shadow-md);
  }
}

// event themes
.w-schedule__event--1 {
  background-color: var(--w-schedule-color-1);
  border-color: lightness(var(--w-schedule-color-1), 0.8);
  color: var(--color-black);
}

.w-schedule__event--2 {
  background-color: var(--w-schedule-color-2);
  border-color: lightness(var(--w-schedule-color-2), 0.8);
  color: var(--color-white);
}

.w-schedule__event--3 {
  background-color: var(--w-schedule-color-3);
  border-color: lightness(var(--w-schedule-color-3), 0.8);
  color: var(--color-black);
}

.w-schedule__event--4 {
  background-color: var(--w-schedule-color-4);
  border-color: lightness(var(--w-schedule-color-4), 0.8);
  color: var(--color-black);
}
/* #endregion */

/* #region (Background Rows) */
.w-schedule__grid {
  display: none; // hide bg grid on smaller devices
}

.w-schedule__grid-row-label { // time
  display: none;
}
/* #endregion */

/* #region (Modal Window) */
.w-schedule-modal {
  --modal-transition-duration: var(--w-schedule-modal-anim-duration);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-sm);
  padding-top: calc(var(--space-sm)*2 + var(--w-schedule-modal-close-btn-size));
}

.w-schedule-modal__content {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.w-schedule-modal__content--loaded > * {
  animation: w-schedule-body-entry-anim .4s;
}

@keyframes w-schedule-body-entry-anim {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.w-schedule-morph-bg { // morphing bg
  position: fixed;
  z-index: var(--z-index-overlay, 15); 
  transform-origin: left top;
}

.w-schedule-close-btn { // modal close button
  position: fixed;
  top: var(--space-sm);
  right: var(--space-sm);
  z-index: var(--z-index-overlay, 15); 

  width: var(--w-schedule-modal-close-btn-size);
  height: var(--w-schedule-modal-close-btn-size);
  border-radius: 50%;
  background-color: alpha(var(--color-black), 0.9);
  
  display: flex;

  opacity: 0;
  visibility: hidden;

  transition: background .2s, opacity var(--w-schedule-modal-anim-duration), visibility 0s var(--w-schedule-modal-anim-duration);

  &:hover {
    background-color:alpha(var(--color-black), 1);
  }

  .icon {
    color: var(--color-white); // icon color
    display: block;
    margin: auto;
  }
}

.w-schedule-close-btn--is-visible {
  opacity: 1;
  visibility: visible;
  transition: background .2s, opacity var(--w-schedule-modal-anim-duration);
}

.w-schedule-modal__figure {
  display: block;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
/* #endregion */

// 👇 layout change
@include breakpoint(md) {
  /* #region (Mobile Navigation) */
  .w-schedule__controls {
    display: none; // hide tabs controls
  }
  /* #endregion */

  /* #region (Events) */
  .w-schedule__days {
    display: flex;
    height: calc(var(--w-schedule-row-nr)* var(--w-schedule-row-height));
  }

  .w-schedule__day {
    display: block !important; // make all sections visible despite being tab panels
    flex-grow: 1;
    flex-basis: 0;
    padding-top: 0;

    border: 0px solid alpha(var(--color-contrast-higher), 0.1);
    border-left-width: 1px;
  
    &:last-child {
      border-right-width: 1px;
    }
  }

  .w-schedule__col-label {
    display: flex;
    height: var(--w-schedule-row-height);
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid alpha(var(--color-contrast-higher), 0.1);
  }

  .w-schedule__event-wrapper {
    margin-bottom: 0 !important;
  }

  .w-schedule__event {
    height: var(--w-schedule-event-height, auto); // set in JS
    padding: var(--space-xs);

    position: absolute;
    left: 0;
    top: var(--w-schedule-event-top, initial); // set in JS
    width: 100%;
  }
  /* #endregion */

  /* #region (Background Rows) */
  .w-schedule__grid {
    display: block;
    position: absolute;
    z-index: 1;
    top: var(--w-schedule-row-height);
    left: 0;
    width: 100%;
  }

  .w-schedule__grid-row {
    position: relative;
    height: var(--w-schedule-row-height);

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: alpha(var(--color-contrast-higher), 0.1);
    }
  }
  /* #endregion */

  /* #region (Modal Window) */
  .w-schedule-modal {
    padding-top: calc(var(--space-xs)*2 + var(--w-schedule-modal-close-btn-size));
    padding-bottom: calc(var(--space-xs)*2 + var(--w-schedule-modal-close-btn-size));
  }

  .w-schedule-modal__content {
    max-width: var(--max-width-md);
    max-height: 680px;
    overflow: hidden;
  }

  .w-schedule-modal__body {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  /* #endregion */
}


@include breakpoint(lg) {
  /* #region (Events) */
  .w-schedule__days {
    margin-left: 60px;
  }
  /* #endregion */

  /* #region (Background Rows) */
  .w-schedule__grid-row {
    &:not(:last-child)::after {
      left: 60px;
      width: calc(100% - 60px);
    }
  }

  .w-schedule__grid-row-label { // time (row labels)
    display: inline-block;
    line-height: 1;
    position: absolute;
    transform: translateY(-50%);
    top: 0;
    left: 0;
    font-size: var(--text-sm);
  }
  /* #endregion */
}
</style>
