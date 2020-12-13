/* eslint-env jest */
import { mount } from '@vue/test-utils'
import Coverflow from '../../lib/Coverflow'

describe('Component', () => {
  const coverList = [
    {
      cover: 'http://ogu51f989.bkt.clouddn.com/react.png',
      title: 'React'
    }, {
      cover: 'http://ogu51f989.bkt.clouddn.com/angular.png',
      title: 'Angular'
    }, {
      cover: 'http://ogu51f989.bkt.clouddn.com/vue.png',
      title: 'Vue'
    }, {
      cover: 'http://ogu51f989.bkt.clouddn.com/webpack.png',
      title: null
    }, {
      cover: 'http://ogu51f989.bkt.clouddn.com/yarn.png',
      title: 'Yarn'
    }, {
      cover: 'http://ogu51f989.bkt.clouddn.com/node.png',
      title: 'Node'
    }
  ]

  test('is a Vue instance', () => {
    const wrapper = mount(Coverflow, {
      propsData: {
        coverList
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  describe('props', () => {
    test('default props', () => {
      const wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      expect(wrapper.props().width).toBe(980)
      expect(wrapper.props().bgColor).toBe('transparent')
      expect(wrapper.props().index).toBe(0)
      expect(wrapper.props().coverWidth).toBe(100)
      expect(wrapper.props().coverHeight).toBe(0)
      expect(wrapper.props().coverSpace).toBe(50)
      expect(wrapper.props().coverShadow).toBeFalsy()
      expect(wrapper.props().coverFlat).toBeFalsy()
    })

    test('width', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      expect(wrapper.attributes().style.includes('width: 980px;')).toBeTruthy()

      wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          width: 300
        }
      })

      expect(wrapper.attributes().style.includes('width: 300px;')).toBeTruthy()
    })

    test('bgColor', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      expect(wrapper.attributes().style.includes('background-color: transparent;')).toBeTruthy()

      wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          bgColor: 'rgb(255, 255, 255)'
        }
      })

      expect(wrapper.attributes().style.includes('background-color: rgb(255, 255, 255);')).toBeTruthy()
    })

    test('coverWidth', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        expect(image.attributes().style.includes('width: 100px;')).toBeTruthy()
      })

      wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverWidth: 260
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        expect(image.attributes().style.includes('width: 260px;')).toBeTruthy()
      })
    })

    test('coverHeight', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverHeight: 50
        }
      })

      expect(wrapper.attributes().style.includes('height: 180px;')).toBeTruthy()

      wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverHeight: 500
        }
      })

      expect(wrapper.attributes().style.includes('height: 580px;')).toBeTruthy()
    })

    test('coverSpace', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        const left = (index * 50) + 50
        expect(image.attributes().style.includes(`left: ${left}px;`)).toBeTruthy()
      })

      wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverSpace: 100
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        const left = (index * 100) + 100
        expect(image.attributes().style.includes(`left: ${left}px;`)).toBeTruthy()
      })
    })

    test('coverShadow', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverShadow: true
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        expect(image.attributes().style.includes('bottom: 120px;')).toBeTruthy()
      })

      const height = 100 * 2 + 80

      expect(wrapper.attributes().style.includes(`height: ${height}px;`))
    })

    test('coverFlat', () => {
      let wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          coverFlat: true
        }
      })

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        expect(image.attributes().style.includes('transform: rotateY(0deg)')).toBeTruthy()
      })
    })
  })

  describe('template', () => {
    test('images count to equal cover list length', () => {
      const wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      expect(wrapper.findAll('img')).toHaveLength(coverList.length)

      coverList.forEach((item, index) => {
        const image = wrapper.findAll('img').at(index)

        expect(image.attributes().src).toBe(item.cover)
      })
    })
  })

  describe('methods', () => {
    test('handleChange trigger emit', () => {
      const wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      wrapper.vm.handleChange(3)

      expect(wrapper.vm.coverIndex).toBe(3)
      expect(wrapper.emitted('change')[0][0]).toBe(3)
    })

    test('trigger directive click event', () => {
      const wrapper = mount(Coverflow, {
        propsData: {
          coverList,
          index: 3
        }
      })

      wrapper.trigger('click')

      expect(wrapper.vm.coverIndex).toBe(3)

      const image = wrapper.findAll('img').at(0)

      image.trigger('click')

      expect(wrapper.vm.coverIndex).toBe(0)
    })
  })

  describe('hook', () => {
    test('destroy handle directive unbind', () => {
      const wrapper = mount(Coverflow, {
        propsData: {
          coverList
        }
      })

      wrapper.destroy()
    })
  })
})
