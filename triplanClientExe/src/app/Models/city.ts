interface placeInfo {
    city:string,
    country: string,
    alpha2code: string,
    alpha3code: string,
    viatorDestinationId: number,
    viatorDestinationName: string
}

interface locationPoint {
    lat:number,
    lng: number
}

interface boundsInfo {
    northeast:locationPoint,
    southwest: locationPoint
}

interface boundingBoxInfo {
    northeast:locationPoint,
    southeast: locationPoint,
    southwest: locationPoint,
    northwest: locationPoint
}

export interface City {
    place: placeInfo,
    bounds: boundsInfo,
    boundingBox:boundingBoxInfo
}
