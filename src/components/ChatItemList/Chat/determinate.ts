
export const determinateTime = (createdAt: number) => {
    const date = new Date(createdAt)
    const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric"
    }
    const timeformat = new Intl.DateTimeFormat('ru-RU', options)
    const time = timeformat.format(date)
    return time
}

