try {
    notExist()
} catch (error) {
    console.error('An error occured:', error.message)
} finally {
    console.log('Cleanup code can go here.') // Always run
}

throw new Error('This is an error')