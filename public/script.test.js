/**
 * @jest-environment jsdom
 */

function removeSubdomain() {}

test('make sure URL does not contain www. or trailing /', () => {
	// expect(configURL).toBe(configURL)

	var a = 'https://www.pcgamesn.com/'
	var b = 'https://www.trueachievements.com/'
	var c = 'https://www.serebii.net/'
	var d = 'https://tftactics.gg/'

	expect(removeSubdomain(a)).toBe('https://pcgamesn.com')
	expect(removeSubdomain(b)).toBe('https://trueachievements.com')
	expect(removeSubdomain(c)).toBe('https://serebii.net')
	expect(removeSubdomain(d)).toBe('https://tftactics.gg')
})
