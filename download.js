async function downloadCV() {
	const image = await fetch('https://tranquil-ravine-01364.herokuapp.com/assets/doc/resume.pdf')
	const imageBlob = await image.blob()
	const imageURL = URL.createObjectURL(imageBlob)
	const anchor = document.createElement('a')
	anchor.href = imageURL
	anchor.download = 'cv.pdf'
	document.querySelector('#download-cv').appendChild(anchor)
	anchor.click()
	document.querySelector('#download-cv').removeChild(anchor)
	URL.revokeObjectURL(imageURL)
}

document.querySelector('#download-cv').addEventListener('click', downloadCV)