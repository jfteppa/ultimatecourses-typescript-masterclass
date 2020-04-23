Array.isArray([]);

// this should not exist on type ArrayConstructor
Array.from(document.querySelectorAll('*'));
/**
 * Cannot find name 'document'.
 * Do you need to change your target library?
 * Try changing the `lib` compiler option to include 'dom'
 */
