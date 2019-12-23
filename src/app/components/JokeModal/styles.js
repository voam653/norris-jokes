import styled from 'styled-components';

export const ModalContainer = styled.div``
export const Modal = styled.div``
export const CloseIcon = styled.span``
export const ModalHeader = styled.div``
export const ModalBody = styled.div``

export const ModalContent = styled.div`
    border-radius: 6px;
    border: none;
`

export const ModalTitle = styled.h5`
    font-size: 32px;
    color: rgba(0,0,0,0.8);
    text-transform: capitalize;
    margin-right: 8px;
    margin: 0;
    line-height: 1;
    text-align: center;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const CloseButton = styled.button`
    padding: 8px;
    margin-left: 16px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;

    .modal-title {
        font-size: 24px;
        line-height: 1;
        margin-right: 8px;
        color: rgba(0,0,0,0.45);
        text-transform: capitalize;
    }

    #loadAnotherJoke {
        margin-left: auto;
    }

    @media(max-width: 360px) {
        flex-direction: column;

        .modal-title {
            margin-right: 0px;
            margin-bottom: 12px;
        }

        #loadAnotherJoke {
            margin: auto;
            white-space: initial;
        }
    }
`
export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    margin: 0px;
    background-color: #eee;
    border-radius: 6px;
    padding-top: 16px;
    overflow: hidden;
`

export const ChuckNorrisImg = styled.img`
    width: 100%;
    margin-top: 16px;
    border-radius: 6px;
`

export const Joke = styled.figcaption`
    line-height: 1.3;
    color: rgba(0,0,0,0.8);
    font-weight: 500;
    font-size: 16px;
    padding: 0 16px;
    text-align: justify;
`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 360px) {
        flex-direction: column;

        .btn {
            white-space: initial;
            margin: 6px 0px;
            width: 160px;
            max-width: 100%;
        }
    }
`

export const LoadingImg = styled.img`
    max-width: 100%;
`