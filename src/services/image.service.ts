import { UserModel } from '../models/User';
import { ProjectModel } from '../models/Project';
import path from 'path';
import fs from 'fs';

class ImageService{
    static uploadUserImage(id: any, file: any, tipo: string){
        let splitedName = file.name.split('.');
        let ext = splitedName[splitedName.length - 1];
        let exts = ['png', 'jpg', 'jpeg', 'gif'];

        if(!exts.some(extv => extv == ext)){
            throw new Error(`Extension invalida, las extensiones validas son ${exts.join(',')}`)
        }

        let fileName = `${new Date().getMilliseconds() * 365}.${ext}`;

        file.mv(`uploads/${tipo}/${fileName}`, err =>{
            if(err) throw new Error("Error subiendo archivo!");
            switch (`${tipo}`) {
                case 'users':
                    ImageService.userImg(id, fileName);
                    break;
                case 'projects':
                    ImageService.projectImg(id, fileName);
                    break;
            }

        })
    }

    static async userImg(id: any, fileName: any){
        let user = await UserModel.findById(id);

        if(user.image){
            
        }
    }

    static async projectImg(id: any, fileName: any){

    }

    static deleteFile(fileName:any, type:any){
        let rutaImg = path.resolve(__dirname, `../../uploads/${type}/${fileName}`);
        if (fs.existsSync(rutaImg)) {
            fs.unlinkSync(rutaImg);
        };
    }
}