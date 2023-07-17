import type { SwiperProps, SwiperClass } from 'swiper/react'

export const isBeginningActive = (swiper: SwiperClass, parentSwiper: SwiperClass) => {
  console.log('isBeginningActive', swiper, swiper.isBeginning, swiper.isEnd)
  if (!parentSwiper || !swiper) return console.log('swiper 없음', !parentSwiper, !swiper)
  if (swiper.isBeginning && swiper.isEnd) {
    console.log('겹침')
    parentSwiper.enable()
  } else if (swiper.isBeginning) {
    parentSwiper.enable()
    parentSwiper.allowSlideNext = false
    console.log('1')
  } else if (swiper.isEnd) {
    parentSwiper.enable()
    parentSwiper.allowSlidePrev = false
    console.log('2')
  } else {
    parentSwiper.disable()
    console.log('3')
  }
}

export const swiperEvents: SwiperProps = {
  onActiveIndexChange: (e) => console.log('onActiveIndexChange', e),
  onAfterInit: (e) => console.log('onAfterInit', e),
  onBeforeDestroy: (e) => console.log('onBeforeDestroy', e),
  onBeforeInit: (e) => console.log('onBeforeInit', e),
  onBeforeLoopFix: (e) => console.log('onBeforeLoopFix', e),
  onBeforeResize: (e) => console.log('onBeforeResize', e),
  onBeforeSlideChangeStart: (e) => console.log('onBeforeSlideChangeStart', e),
  onBeforeTransitionStart: (e) => console.log('onBeforeTransitionStart', e),
  onBreakpoint: (e) => console.log('onBreakpoint', e),
  onChangeDirection: (e) => console.log('onChangeDirection', e),
  onClick: (e) => console.log('onClick', e),
  onDestroy: (e) => console.log('onDestroy', e),
  onDoubleClick: (e) => console.log('onDoubleClick', e),
  onDoubleTap: (e) => console.log('onDoubleTap', e),
  onFromEdge: (e) => console.log('onFromEdge', e),
  onInit: (e) => console.log('onInit', e),
  onLock: (e) => console.log('onLock', e),
  onLoopFix: (e) => console.log('onLoopFix', e),
  onMomentumBounce: (e) => console.log('onMomentumBounce', e),
  onObserverUpdate: (e) => console.log('onObserverUpdate', e),
  onOrientationchange: (e) => console.log('onOrientationchange', e),
  onProgress: (e) => console.log('onProgress', e),
  onReachBeginning: (e) => console.log('onReachBeginning', e),
  onReachEnd: (e) => console.log('onReachEnd', e),
  onRealIndexChange: (e) => console.log('onRealIndexChange', e),
  onResize: (e) => console.log('onResize', e),
  onSetTransition: (e) => console.log('onSetTransition', e),
  onSetTranslate: (e) => console.log('onSetTranslate', e),
  onSlideChange: (e) => console.log('onSlideChange', e),
  onSlideChangeTransitionEnd: (e) => console.log('onSlideChangeTransitionEnd', e),
  onSlideChangeTransitionStart: (e) => console.log('onSlideChangeTransitionStart', e),
  onSlideNextTransitionEnd: (e) => console.log('onSlideNextTransitionEnd', e),
  onSlideNextTransitionStart: (e) => console.log('onSlideNextTransitionStart', e),
  onSlidePrevTransitionEnd: (e) => console.log('onSlidePrevTransitionEnd', e),
  onSlidePrevTransitionStart: (e) => console.log('onSlidePrevTransitionStart', e),
  onSlideResetTransitionEnd: (e) => console.log('onSlideResetTransitionEnd', e),
  onSlideResetTransitionStart: (e) => console.log('onSlideResetTransitionStart', e),
  onSliderFirstMove: (e) => console.log('onSliderFirstMove', e),
  onSliderMove: (e) => console.log('onSliderMove', e),
  onSlidesGridLengthChange: (e) => console.log('onSlidesGridLengthChange', e),
  onSlidesLengthChange: (e) => console.log('onSlidesLengthChange', e),
  onSnapGridLengthChange: (e) => console.log('onSnapGridLengthChange', e),
  onSnapIndexChange: (e) => console.log('onSnapIndexChange', e),
  onTap: (e) => console.log('onTap', e),
  onToEdge: (e) => console.log('onToEdge', e),
  onTouchEnd: (e) => console.log('onTouchEnd', e),
  onTouchMove: (e) => console.log('onTouchMove', e),
  onTouchMoveOpposite: (e) => console.log('onTouchMoveOpposite', e),
  onTouchStart: (e) => console.log('onTouchStart', e),
  onTransitionEnd: (e) => console.log('onTransitionEnd', e), // added a comma here
  // removed a comma here
}
