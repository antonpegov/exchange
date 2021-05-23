import { toFixed } from 'state/helpers'

describe('Helpers -> toFixed, it leaves two digits after the dot', () => {
  it('changes 1.111 to 1.11', () => {

    expect(toFixed(1.111)).toEqual(1.11)
  })

  it('changes "1.10" to 1.1', () => {

    expect(toFixed('1.10')).toEqual(1.1)
  })
})
