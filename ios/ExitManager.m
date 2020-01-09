//
//  ExitManager.m
//  FirstTestApp
//
//  Created by MacCatalina on 09/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "ExitManager.h"

@implementation ExitManager

RCT_EXPORT_MODULE();

// Exported Mehod Name for the ExitManager module
RCT_EXPORT_METHOD(exitApp)
{
    exit(0);
};

@end
