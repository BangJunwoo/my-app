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

## 클라이언트 국제화 관련

server only인 상위 요소에서 client only 로 props 로 필요한 텍스트를 전달하는 구조로 되어있음
공식 문서 예제임
클라이언트 독립적으로 부여하는 것은 불가능함 ( getDictionay 가 server only 여서 에러가 나옴 )

### type 선언 관련 ( 임시 )

이런 식으로 사용해도 필요한 타입을 가져올 수 있다는 것을 확인함

```ts
import ko from '@/../dictionaries/ko'
export type Dictionary = typeof ko.about.subNav

type Props = {
  dictionary: Dictionary
}
```

# 메인 페이지의 비디오 사이즈 관련

일단 반응형을 먼저 만드는 입장에서
고정 마진으로 오른쪽을 가져버리는 게 좀 .... 그렇긴 한데 반응형 브레이크포인트를 잡기로 한 게 있으니 그걸 기다려야할 것 같기도 한 부분

일단 고정 픽셀 마진보다 공백을 div flex-glow 비율로 잡는 것이 좋아보이고

화면을 16등분하고 , 양쪽을 2 , 2 , 로 잡고 가운데 12로 잡는 걸로 가정하고
6에서 12로 커진다고 생각하고 6에서 12로 반응형을 부여할 수 있음

flex 속성 변경에도 애니메이션이 적용되는지는 확인해본적 없어서 확인 필요함
