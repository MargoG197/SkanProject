
function parseXmlText(xmlString: string): string {
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
  
  for (const [entity, char] of Object.entries(entities)) {
    result = result.replace(new RegExp(entity, 'g'), char);
  }
  
  return result
}


export {parseXmlText}