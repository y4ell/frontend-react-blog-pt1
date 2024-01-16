function formatDate(dateInput) {
    const date = new Date(dateInput)
    return date.toLocaleDateString( 'nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default formatDate


