# 폴더 구조 컨벤션

mvvm + repository 패턴을 사용한다
Next의 app router를 사용함
next 구조 상 어쩔 수 없이 적용되야하는 폴더 구조를 포함한 설계 구조를 따른다
![구조 정리](/docs/mvvm.dio.png)

# 국제화 관련

![국제화 정리](/docs/i18n.dio.png)

국제화 텍스트 데이터를 관리하는 이름 규칙을 다음과 같이 정한다

우선 `getDictionay(lang)` 를 통해 필요한 텍스트를 불러오는데
getDictionary로 나오는 객체의 네이밍 컨벤션은 다음과 같다

1 depth는 GNB의 최상위 카테고리명으로 한다 서로 겹치지 않기 때문에 결정된 것이고..
영문명을 기본키로 한다 내부 내용만 변경함

about의 header와 스크롤이 연결되어있어서 충분히 외부로 뺄 수 있을 것으로 보여짐
