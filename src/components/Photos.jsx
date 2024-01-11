import { StyledPhotos } from "../styles/StyledPhotos"

export const Photos = () => {
    return(
        <StyledPhotos>
            <div className="column1">
                <img src="./src/assets/banner_01.png" alt="Foto 1" />
                <img src="./src/assets/banner_02.png" alt="Foto 2" />
            </div>
            <div className="column2">
                <img src="./src/assets/banner_03.png" alt="Foto 3" />
            </div>
            <div className="column3">
                <img src="./src/assets/banner_04.png" alt="Foto 4" />
                <img src="./src/assets/banner_05.png" alt="Foto 5" />
            </div>
        </StyledPhotos>
    )
}