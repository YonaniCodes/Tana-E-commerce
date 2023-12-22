export function addEventHandlers(
  classname,
  eventType,
  itsfunction,
  isobject = true
) {
  if (isobject) {
    console.log("here " + isobject);

    let elements = document.querySelectorAll(classname);
    elements.forEach((element) => {
      element.addEventListener(eventType, itsfunction);
    });
  } else {
    let element = document.querySelector(classname);

    console.log(itsfunction);
    element.addEventListener(eventType, itsfunction);
  }
}
