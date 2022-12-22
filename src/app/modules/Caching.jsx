import axios from "axios";
import { createContext } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { db } from "./db";

const assetsToBeCached = [
    {title: 'test-runner', url: ''},
    {title: 'pda-device', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/device_without_button.png'}
];

export const CachedAssetsContext = createContext();

export default function CacheAssets({children}){
    const [currentAsset, setCurrentAsset] = useState('');
    
    const assets                          = useLiveQuery(
        () => db.assets.where('title').equalsIgnoreCase(currentAsset).toArray(),
    );
    
    assetsToBeCached.forEach((asset, index) => {
        setCurrentAsset(asset.title);
    });
}