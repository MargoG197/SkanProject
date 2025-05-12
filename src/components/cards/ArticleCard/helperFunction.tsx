function parseXmlText(xmlString: string): string {

  // console.log(xmlString, "xmlString")
  // Создаем временный элемент для парсинга XML
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
  // Рекурсивная функция для извлечения текста
  const extractText = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent?.trim() || '';
    }
    
    let text = '';
    for (const childNode of node.childNodes) {
      text += ' ' + extractText(childNode);
    }
    return text;
  };
  
  // Обрабатываем весь документ
  let result = extractText(xmlDoc)
    .replace(/\s+/g, ' ')  // Удаляем лишние пробелы
    .replace(/\(\s*повтор\s*\)/gi, '')  // Удаляем метки повторов
    .trim();
    
  // Восстанавливаем пунктуацию
  result = result
    .replace(/\s*([,.!?;:])\s*/g, '$1 ')  // Правильные пробелы после знаков
    .replace(/\s{2,}/g, ' ');  // Удаляем двойные пробелы
    
  // Обрабатываем HTML-сущности
  const entities: Record<string, string> = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&apos;': "'"
  };
  
  const improvedTagRegex = /<\/?[\w][^>]*>/g;
  
  for (const [entity, char] of Object.entries(entities)) {
    result = result.replace(new RegExp(entity, 'g'), char)
      .replace(improvedTagRegex , '')
  }
  
  return result
}


function countWordsAccurate(text: string): number {
  const wordRegex = /[a-zA-Zа-яА-ЯёЁ0-9\-']+/g;
  const matches = text.match(wordRegex);
  return matches ? matches.length : 0;
}

export {parseXmlText, countWordsAccurate}