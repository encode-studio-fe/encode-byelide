import type { Ref } from 'vue'

/**
 * Checks if tag or tag.value (ref) is string function or object
 * @param {*} tag
 * @returns boolean
 */
export function validateTagProp(tag?: Ref) {
  if (tag) {
    if (typeof tag === 'string') return true
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true
      }
    }
    return false
  }
  return true
}

export function getTagProps(ctx: any, tagClass?: string) {
  const tag = ctx.$props.tag
  if (tag) {
    if (typeof tag === 'string') {
      const result: any = { value: tag }
      if (tagClass) {
        result.props = { class: tagClass }
      }
      return result
    } else if (typeof tag === 'object') {
      const result = { value: tag.value || 'div', props: tag.props || {} }
      if (tagClass) {
        if (result.props.class) {
          if (Array.isArray(result.props.class)) {
            result.props.class.push(tagClass)
          } else {
            result.props.class = [tagClass, result.props.class]
          }
        } else {
          result.props.class = tagClass
        }
      }
      return result
    }
  }
  return { value: 'div' }
}
