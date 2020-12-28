import React from 'react';

/// <reference types="@welldone-software/why-did-you-render" />

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React, {
  trackAllPureComponents: true,
});

console.log("### whyDidYouRender configured")
