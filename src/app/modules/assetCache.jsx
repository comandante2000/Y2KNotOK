import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

function assetChecker(asset){
    
    const assets = useLiveQuery(
        () => db.assets.where('title').equalsIgnoreCase(asset.title).toArray(),
    );
    
    //**Add Asset if non Existent */
    if(assets.length === 0){
        try{
            db.assets.add({
                title: asset.title,
                url: asset.url,
                blob: asset.blob
            });
            return true;
        }catch (error){
            db.errors.add({
                desc: error
            });
            return false;
        }
    }
    
    //**Update Asset if Different URL */
    if(assets[0].url !== asset.url){
        let asset = {
            id: assets[0].id,
            title: asset.title,
            url: asset.url,
            blob: asset.blob
        };
        const updatedAsset = updateAsset(asset);
        if(updatedAsset){
            return true;
        }
        return false;
    }
    return false;
}

function updateAsset(asset){
    try {
        db.assets.put({
            id: asset.id,
            title: asset.title,
            url: asset.url,
            blob: asset.blob
        });
        return true;
    } catch (error) {
        return false;
    }
}

export default function CacheAsset(asset){
    const assetStatus = assetChecker(asset);
    return assetStatus
}