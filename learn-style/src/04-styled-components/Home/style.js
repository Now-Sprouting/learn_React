import styled from 'styled-components'
const HomeWrappser = styled.div`
    font-size: 50px;
    color: red;
    /*1. 可以使用嵌套 */
    .banner {
        font-size: 20px;
        color:pink;
    }
    span {
        background-color: red;
        /*2. 可以使用一些预处理器的格式 */
        &.active {
            color: black;
        }
        /*3. 支持伪类 */
        &:hover {
            color:purple;
        }
        /*4. 支持伪元素 */
        &::after{
            content:'a'
        }
    }
`
export default HomeWrappser