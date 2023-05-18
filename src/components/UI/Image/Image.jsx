const Image = ({ src, alt, className, width, height }) => {


    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
        />
    )
}

Image.defaultProps = {
    src: '',
    alt: 'картинка пользователя',
    className: '',
    width: 50,
    height: 50,
}

export default Image