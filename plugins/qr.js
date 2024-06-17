if (image !== "غير متوفر") {
    const imageResponse = await axios.get(image, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');

    await conn.sendMessage(m.chat, { image: imageBuffer, caption: messageText });
} else {
    const imageResponse = await axios.get("رابط الصورة هنا", { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');

    await conn.sendMessage(m.chat, { image: imageBuffer, caption: messageText });
}
