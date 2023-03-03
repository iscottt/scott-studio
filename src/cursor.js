/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const Renderer = function () {
  let r
  const e = []
  const o = []
  const t = 1 / 60
  const u = 0.2
  let i = 0
  let a = window.performance.now()
  let f = 0
  return requestAnimationFrame(function n() {
    for (r = window.performance.now(), f += Math.min(1, (r - a) / 1e3), a = r; t < f;) {
      f -= t, i += (window.pageYOffset - i) * u, e.forEach((n) => {
        return n(i)
      })
    }
    o.forEach((n) => {
      return n(i)
    }), requestAnimationFrame(n)
  }), {
    onUpdate(n) {
      return e.push(n)
    },
    onRender(n) {
      return o.push(n)
    },
  }
}
window.renderer = new Renderer()
function Cursor(t) {
  const e = document.querySelectorAll('a, [data-cursor]')
  const n = { x: 0, y: 0 }
  const o = { x: 0, y: 0 }
  const r = { x: 0, y: 0 }
  // eslint-disable-next-line max-statements-per-line
  let a = 0.1; let c = 0.1
  function d(e) {
    e.stopPropagation()
    a = e.currentTarget.dataset.cursorScale || e.currentTarget.offsetHeight / 10
    a = Number(a) / 10
    t.style.filter = 'invert(1)'
    t.style.mixBlendMode = 'exclusion'
  }
  function s(_e) {
    a = 0.1,
    t.style.filter = '',
    t.style.mixBlendMode = ''
  }
  e.forEach((e) => {
    e.addEventListener('mouseover', d),
    e.addEventListener('mouseout', s)
  }),
  window.addEventListener('mousemove', (e) => { n.x = e.x, n.y = e.y }),
  document.addEventListener('mouseenter', () => { a = 0.1 }),
  document.addEventListener('mouseleave', () => { a = 0 }),
  window.renderer.onUpdate(() => {
    const e = n.x - o.x
    const t = n.y - o.y
    o.x += 0.2 * e,
    o.y += 0.2 * t,
    c += 0.2 * (a - c),
    r.x = e > 0 ? Math.min(e, 5) / 100 : Math.max(e, -5) / 100,
    r.y = t > 0 ? Math.min(t, 5) / 100 : Math.max(t, -5) / 100
  }),
  window.renderer.onRender(() => {
    t && (t.style.transform = 'translate(-50%, -50%) translate3d('.concat(o.x, 'px, ').concat(o.y, 'px, 0) scale(').concat(c * (1 + r.x), ', ').concat(c * (1 + r.y), ') skew(').concat(r.x, 'deg, ').concat(r.y, 'deg)'))
  })
}

export default Cursor
