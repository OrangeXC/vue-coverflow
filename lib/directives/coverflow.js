function setTransform3D (el, degree, perspective, z) {
  degree = Math.max(Math.min(degree, 90), -90)
  z -= 5
  el.style['-webkit-perspective'] = el.style['perspective'] = el.style['-moz-perspective'] = perspective + 'px'
  el.style['-webkit-transform'] = el.style['transform'] = 'rotateY(' + degree + 'deg) translateZ(' + z + 'px)'
}

function displayIndex (imgSize, spacing, left, imgs, index, flat, width, titleBox, vnode) {
  var mLeft = (width - imgSize) * 0.5 - spacing * (index + 1) - imgSize * 0.5

  for (var i = 0; i <= index; i++) {
    imgs[i].style.left = (left + i * spacing + spacing) + 'px'
    imgs[i].style.marginLeft = mLeft + 'px'
    imgs[i].style['-webkit-filter'] = 'brightness(0.65)'
    imgs[i].style.zIndex = i + 1
    setTransform3D(imgs[i], flat ? 0 : ((index - i) * 10 + 45), 300, flat ? -(index - i) * 10 : (-(index - i) * 30 - 20))
  }

  imgs[index].style['-webkit-filter'] = 'none'
  imgs[index].style.marginLeft = (mLeft + imgSize * 0.5) + 'px'
  imgs[index].style.zIndex = imgs.length
  titleBox.style.visibility = 'hidden'

  if (vnode.context.coverList[index].title) {
    titleBox.style.visibility = 'visible'
    var info = vnode.context.coverList[index].title
    titleBox.innerHTML = info
    titleBox.style.left = (left + index * spacing + spacing + 10) + 'px'
    titleBox.style.marginLeft = (mLeft + imgSize * 0.5) + 'px'
  }

  setTransform3D(imgs[index], 0, 0, 5)

  for (var j = index + 1; j < imgs.length; ++j) {
    imgs[j].style.left = (left + j * spacing + spacing) + 'px'
    imgs[j].style.marginLeft = (mLeft + imgSize) + 'px'
    imgs[j].style['-webkit-filter'] = 'brightness(0.7)'
    imgs[j].style.zIndex = imgs.length - j
    setTransform3D(imgs[j], flat ? 0 : ((index - j) * 10 - 45), 300, flat ? (index - j) * 10 : ((index - j) * 30 - 20))
  }

  if (vnode.context.coverIndex !== index) {
    vnode.context.handleChange(index)
  }
}

export default {
  bind: function (el, binding, vnode) {
    var imgSize = parseInt(vnode.context.coverWidth)
    var spacing = parseInt(vnode.context.coverSpace)
    var shadow = vnode.context.coverShadow
    var bgColor = vnode.context.bgColor
    var flat = vnode.context.coverFlat
    var width = vnode.context.width
    var index = vnode.context.index
    vnode.context.coverIndex = index
    var imgHeight = Math.max(vnode.context.coverHeight, vnode.context.coverWidth)
    var imgs = []
    var placeholding

    for (var i = 0; i < el.childNodes.length; ++i) {
      imgs.push(el.childNodes[i])
    }

    for (var j = 0; j < imgs.length; j++) {
      imgs[j].style.position = 'absolute'
      imgs[j].style.width = imgSize + 'px'
      imgs[j].style.height = 'auto'
      imgs[j].style.bottom = '60px'
      imgs[j].style.transition = 'transform .4s ease, margin-left .4s ease, -webkit-filter .4s ease'
    }

    el.style.overflowX = 'hidden'
    el.style.backgroundColor = bgColor

    var titleBox = document.createElement('SPAN')

    if (!shadow) {
      titleBox.className = 'coverflow-title-box'
      titleBox.style.position = 'absolute'
      titleBox.style.width = (imgSize - 20) + 'px'
      titleBox.style.height = '20px'
      titleBox.style.lineHeight = '20px'
      titleBox.style.fontSize = '14px'
      titleBox.style.padding = '0 3px'
      titleBox.style.color = '#222'
      titleBox.style.background = '#ddd'
      titleBox.style.borderRadius = '10px'
      titleBox.style.fontWeight = 'normal'
      titleBox.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
      titleBox.style.bottom = '28px'
      titleBox.style.textAlign = 'center'
      titleBox.style.display = 'block'
      el.appendChild(titleBox)
    }

    setTransform3D(el, 0, 600, 0)
    placeholding = document.createElement('DIV')
    placeholding.style.width = width * 2 + 'px'
    placeholding.style.height = '1px'
    el.appendChild(placeholding)

    el.style.width = width + 'px'

    if (shadow) {
      el.style.height = (imgHeight * 2 + 80) + 'px'
      el.style['-webkit-perspective-origin'] = el.style['perspective-origin'] = el.style['-moz-perspective-origin'] = '50% 25%'

      for (var k = 0; k < imgs.length; k++) {
        imgs[k].style.bottom = (20 + imgHeight) + 'px'
        imgs[k].style['-webkit-box-reflect'] = 'below 0 -webkit-gradient(linear, 30% 20%, 30% 100%, from(transparent), color-stop(0.3, transparent), to(rgba(0, 0, 0, 0.8)))'
      }
    } else {
      el.style.height = (imgHeight + 80) + 'px'
    }

    el.style.position = 'relative'

    displayIndex(imgSize, spacing, el.scrollLeft, imgs, index, flat, parseInt(el.style.width), titleBox, vnode)

    function handleClick (event) {
      if (event.target && event.target.nodeName.toUpperCase() === 'IMG') {
        var index = imgs.indexOf(event.target)

        displayIndex(imgSize, spacing, el.scrollLeft, imgs, index, flat, parseInt(el.style.width), titleBox, vnode)
      }
    }

    el.addEventListener('click', handleClick, false)

    el.$destroy = () => {
      el.removeEventListener('click', handleClick, false)
    }
  },
  unbind: function (el) {
    el.$destroy()
  }
}
